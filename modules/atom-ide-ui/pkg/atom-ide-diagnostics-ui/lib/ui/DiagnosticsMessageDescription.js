/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import * as React from 'react';
import marked from 'marked';

type DiagnosticsMessageDescriptionProps = {
  description: ?string,
};

export const DiagnosticsMessageDescription = (
  props: DiagnosticsMessageDescriptionProps,
) => {
  const {description} = props;
  if (description != null) {
    const __html = marked(description);
    return <div dangerouslySetInnerHTML={{__html}} />;
  }
  return null;
};
