const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs'); // Optional if using .cjs files
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;
