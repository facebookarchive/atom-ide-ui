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

# Force a detached HEAD
git checkout "$(git rev-parse HEAD)"

npm run release-transpile -- --overwrite

# Add additional files to ignore for publishing.
cat .gitignore.release >> .gitignore
# Remove newly ignored files from the commit.
git ls-files --ignored --exclude-standard -z | xargs -0 git rm --cached

git add -A && git commit -m "Release ${VERSION}"

if [[ "$1" != "--dry-run" ]]; then
  git tag "${VERSION}"
  git push origin "${VERSION}"

  apm publish --tag "${VERSION}"
fi
