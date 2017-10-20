'use strict';

var _idx;

function _load_idx() {
  return _idx = _interopRequireDefault(require('idx'));
}

var _fs = _interopRequireDefault(require('fs'));

var _path = _interopRequireDefault(require('path'));

var _FeatureLoader;

function _load_FeatureLoader() {
  return _FeatureLoader = _interopRequireDefault(require('../FeatureLoader'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line rulesdir/prefer-nuclide-uri
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @format
 */

const FEATURE_PACKAGE_DIR = _path.default.join(__dirname, 'fixtures', 'feature-package');
const featurePkg = JSON.parse(_fs.default.readFileSync(_path.default.join(FEATURE_PACKAGE_DIR, 'package.json')).toString());
const featureName = featurePkg.name;

const ROOT_PACKAGE_DIR = _path.default.join(__dirname, 'fixtures', 'root-package');
const rootPkg = JSON.parse(_fs.default.readFileSync(_path.default.join(ROOT_PACKAGE_DIR, 'package.json')).toString());

describe('FeatureLoader', () => {
  let loader;
  beforeEach(() => {
    loader = new (_FeatureLoader || _load_FeatureLoader()).default({
      pkgName: rootPkg.name,
      features: [{
        dirname: FEATURE_PACKAGE_DIR,
        pkg: featurePkg
      }]
    });
    atom.packages.loadPackage(ROOT_PACKAGE_DIR);
  });

  describe('load', () => {
    beforeEach(() => {
      spyOn(atom.packages, 'loadPackage');
      atom.config.set(`${rootPkg.name}.use.${featurePkg.name}`, true);
      loader.load();
      atom.packages.emitter.emit('did-load-package', { name: rootPkg.name });
    });

    it('sets a description including provided and consumed services', () => {
      var _ref, _ref2, _ref3, _ref4;

      expect((_ref = loader.getConfig()) != null ? (_ref2 = _ref.use) != null ? (_ref3 = _ref2.properties) != null ? (_ref4 = _ref3[featureName]) != null ? _ref4.description : _ref4 : _ref3 : _ref2 : _ref).toEqual('Hyperclick UI<br/>**Provides:** _hyperclick.observeTextEditor_<br/>**Consumes:** _hyperclick_');
    });

    it("merges the feature config into the passed config's feature properties", () => {
      var _ref5, _ref6;

      expect((_ref5 = loader.getConfig()) != null ? (_ref6 = _ref5[featureName]) != null ? _ref6.properties : _ref6 : _ref5).toEqual(featurePkg.atomConfig);
    });

    it('loads the feature package when the root package loads', () => {
      runs(() => {
        expect(atom.packages.loadPackage).toHaveBeenCalledWith(FEATURE_PACKAGE_DIR);
      });
    });
  });

  describe('activate', () => {
    it('activates the feature package right away if enabled', () => {
      spyOn(atom.packages, 'activatePackage');

      loader.load();
      atom.config.set(`${rootPkg.name}.use.${featurePkg.name}`, true);
      atom.packages.emitter.emit('did-load-package', { name: rootPkg.name });
      loader.activate();

      runs(() => {
        expect(atom.packages.activatePackage).toHaveBeenCalledWith(FEATURE_PACKAGE_DIR);
      });
    });
  });

  describe('activating, deactivating, then activating again', () => {
    it('actives, deactivates, then activates feature packages', () => {
      spyOn(atom.packages, 'activatePackage');
      spyOn(atom.packages, 'deactivatePackage');

      loader.load();
      atom.config.set(`${rootPkg.name}.use.${featurePkg.name}`, true);
      atom.packages.emitter.emit('did-load-package', { name: rootPkg.name });
      loader.activate();

      expect(atom.packages.activatePackage).toHaveBeenCalledWith(FEATURE_PACKAGE_DIR);

      loader.deactivate();
      expect(atom.packages.deactivatePackage).toHaveBeenCalledWith(featurePkg.name, true);

      loader.activate();
      expect(atom.packages.activatePackage).toHaveBeenCalledWith(FEATURE_PACKAGE_DIR);
    });
  });
});