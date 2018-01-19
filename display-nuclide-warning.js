/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @noflow
 */
'use strict';

/* eslint
  comma-dangle: [1, always-multiline],
  prefer-object-spread/prefer-object-spread: 0,
  rulesdir/no-commonjs: 0,
  */

const HIDE_WARNING_KEY = 'atom-ide-ui.hideNuclideWarning';

module.exports = function displayNuclideWarning() {
  if (!atom.config.get(HIDE_WARNING_KEY)) {
    const notification = atom.notifications.addInfo(
      'Atom IDE UI is bundled with Nuclide',
      {
        description:
          '`atom-ide-ui` will be deactivated in favor of Nuclide.<br>' +
          'Please disable Nuclide if you only want to use `atom-ide-ui`.',
        dismissable: true,
        buttons: [
          {
            text: 'Disable Nuclide and reload',
            onDidClick() {
              atom.packages.disablePackage('nuclide');
              atom.reload();
              notification.dismiss();
            },
          },
          {
            text: 'Disable atom-ide-ui',
            onDidClick() {
              atom.packages.disablePackage('atom-ide-ui');
              notification.dismiss();
            },
          },
          {
            text: "Don't warn me again",
            onDidClick() {
              atom.config.set(HIDE_WARNING_KEY, true);
              notification.dismiss();
            },
          },
        ],
      }
    );
  }
};
