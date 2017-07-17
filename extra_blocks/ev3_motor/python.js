'use strict';

goog.provide('Blockly.Python.ev3_motor');

goog.require('Blockly.Python');

Blockly.Python['ev3_motor_run_linked_timed'] = function(block) {
  // Repeat n times.
  var p = Blockly.Python.valueToCode(block, 'MOTOR_POWER',
      Blockly.Python.ORDER_NONE) || '100'
  var t = Blockly.Python.valueToCode(block, 'MOTOR_TIME',
          Blockly.Python.ORDER_NONE) || '1000'
  var m = block.getFieldValue('MOTOR_PORT');
  var a = block.getFieldValue('ADDITIONAL_MOTOR_PORT');
  var i = block.getFieldValue('MOTOR_INVERTED');
  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `m0 = ev3.Motor("${m}")\n`;
  code += `m1 = ev3.Motor("${a}")\n`;
  code += `speed0 = (m0.max_speed * (${p})) / 100\n`;
  code += `speed1 = (m1.max_speed * (${p})) / 100 * (-1 if "${i}" == "TRUE" else 1)\n`;
  code += `m0.run_timed(time_sp=${t},speed_sp=speed0)\n`;
  code += `m1.run_timed(time_sp=${t},speed_sp=speed1)\n`;

  return code;
};

Blockly.Python['ev3_motor_run_timed'] = function(block) {
  // Repeat n times.
  var p = Blockly.Python.valueToCode(block, 'MOTOR_POWER',
      Blockly.Python.ORDER_NONE) || '100'
  var t = Blockly.Python.valueToCode(block, 'MOTOR_TIME',
          Blockly.Python.ORDER_NONE) || '1000'
  var m = block.getFieldValue('MOTOR_PORT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `m = ev3.Motor("${m}")\n`;
  code += `m.duty_cycle_sp = ${p}\n`;
  code += `m.time_sp = ${t}\n`;
  code += "m.run_timed()\n";

  return code;
};

Blockly.Python['ev3_motor_stop'] = function(block) {

  var m = block.getFieldValue('MOTOR_PORT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `m = ev3.Motor("${m}")\n`;
  code += "m.stop()\n";

  return code;
};
