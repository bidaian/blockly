'use strict';

goog.provide('Blockly.Python.ev3_motor');

goog.require('Blockly.Python');

Blockly.Python['ev3_motor_run_forever'] = function(block) {
  // Repeat n times.
  var p = Blockly.Python.valueToCode(block, 'MOTOR_POWER',
      Blockly.Python.ORDER_NONE) || '100'
  var m = block.getFieldValue('MOTOR_PORT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `m = ev3.Motor("${m}")\n`;
  code += `m.duty_cycle_sp = ${p}\n`;
  code += "m.run_direct()\n";

  return code;
};

Blockly.Python['ev3_motor_stop'] = function(block) {

  var m = block.getFieldValue('MOTOR_PORT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `m = ev3.Motor("${m}")\n`;
  code += "m.stop()\n";

  return code;
};
