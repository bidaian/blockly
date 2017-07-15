'use strict';

goog.provide('Blockly.Python.ev3_say');

goog.require('Blockly.Python');

Blockly.Python['ev3_say'] = function(block) {
  // Repeat n times.
  var s = Blockly.Python.valueToCode(block, 'SENTENCE',
      Blockly.Python.ORDER_NONE) || ''
  var l = block.getFieldValue('LANGUAGE');

  Blockly.Python.definitions_['import_espeak'] = 'import espeak';

  var code = "espeak.set_voice('" + l + "')\n";
  code += "espeak.synth(" + s + ")\n";
  code += "while espeak.is_playing():\n"
  code += " pass\n"

  return code;
};
