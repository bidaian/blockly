'use strict';

goog.provide('Blockly.Python.ev3_say');

goog.require('Blockly.Python');

Blockly.Python['ev3_say'] = function(block) {
  // Repeat n times.
  var s = Blockly.Python.valueToCode(block, 'SENTENCE',
      Blockly.Python.ORDER_NONE) || ''
  var l = block.getFieldValue('LANGUAGE');

/*
  Blockly.Python.definitions_['import_espeak'] = 'import espeak';

  var code = "espeak.set_voice('" + l + "')\n";
  code += "espeak.synth(" + s + ")\n";
  code += "while espeak.is_playing():\n"
  code += " pass\n"
*/

  Blockly.Python.definitions_['import_subprocess'] = 'import subprocess';

  var code = 'subprocess.call(["espeak","-v","' + l + '","-w","/tmp/voice.wav","-a","200","-s","130","' + s + '"])\n';
  code += 'subprocess.call(["aplay","/tmp/voice.wav"])\n';

  return code;
};
