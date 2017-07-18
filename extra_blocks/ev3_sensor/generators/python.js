'use strict';
goog.require('Blockly.Python');

Blockly.Python['ev3_sensor_touch'] = function(block) {
  var p = block.getFieldValue('SENSOR_PORT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code;

  if (p == 'auto') {
    code = "ev3.TouchSensor().is_pressed";
  } else {
    code = `ev3.TouchSensor(address="${p}").is_pressed`;
  }
  return [code,Blockly.Python.ORDER_CONDITIONAL];
};
