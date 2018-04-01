#!/bin/bash

# Copyright (c) 2015-present, Facebook, Inc.
# All rights reserved.
#
# This source code is licensed under the license found in the LICENSE file in
# the root directory of this source tree.

set -e

THIS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VERSION="v$(node -p 'require("./package.json").version')"

echo "Using Atom version:"
atom -v
echo "Using APM version:"
apm -v

if ! apm stars >/dev/null; then
  echo "Not logged in to apm."
  exit 1
fi
if ! git config --get user.email >/dev/null; then
  echo "Git \"user.email\" not set."
  exit 1
fi
if ! git config --get user.name >/dev/null; then
  echo "Git \"user.name\" not set."
  exit 1
fi
if ! which jq >/dev/null; then
  echo "You must have jq installed."
  exit 1
fi

# Force a detached HEAD
git checkout "$(git rev-parse HEAD)"

npm run release-transpile -- --overwrite

# Remove "private" field.
jq 'del(.private)' < package.json > package.json.new
mv package.json.new package.json

# Remove newly ignored files from the commit.
git ls-files --ignored --exclude-standard -z | xargs -0 git rm --cached

git add -A && git commit -m "Release ${VERSION}"

echo
echo "Run 'apm link' and manually verify that the release seems OK."
echo "When ready, run:"
echo "  git tag ${VERSION}"
echo "  git push origin ${VERSION}"
echo "  apm publish --tag ${VERSION}"
