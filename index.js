/**
 * ammojs-es
 *
 * CommonJS entry point that provides both standard JS and WebAssembly versions of Ammo.js
 */

// Helper to detect WebAssembly support
function isWebAssemblySupported() {
  try {
    if (
      typeof WebAssembly === "object" &&
      typeof WebAssembly.instantiate === "function"
    ) {
      const module = new WebAssembly.Module(
        new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
      );
      if (module instanceof WebAssembly.Module) {
        return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
      }
    }
  } catch (e) {}
  return false;
}

// Standard Ammo.js
const Ammo = require("./ammo.js");

// WebAssembly version of Ammo.js
const AmmoWasm = require("./ammo.wasm.js");

// Main loader function with auto-detection of WebAssembly support
function loadAmmo(options = {}) {
  const useWasm =
    options.useWasm !== undefined ? options.useWasm : isWebAssemblySupported();
  return useWasm ? AmmoWasm(options) : Ammo(options);
}

// Add direct access to specific versions
loadAmmo.js = function (options = {}) {
  return Ammo(options);
};

loadAmmo.wasm = function (options = {}) {
  return AmmoWasm(options);
};

module.exports = loadAmmo;
