goog.require('Blockly.Blocks');

Blockly.Blocks['ev3_motor_run_forever'] = {
  init : function() {
      var ports = [ [ Blockly.Msg.START_MOTOR_PORT + ' A', 'outA' ],
      [ Blockly.Msg.START_MOTOR_PORT + ' B', 'outB' ],
      [ Blockly.Msg.START_MOTOR_PORT + ' C', 'outC' ],
      [ Blockly.Msg.START_MOTOR_PORT + ' D', 'outD' ] ];
      var motorPort = new Blockly.FieldDropdown(ports);
      this.appendValueInput('MOTOR_POWER').appendField(motorPort, 'MOTOR_PORT').appendField(Blockly.Msg.ON).appendField(Blockly.Msg.MOTOR_SPEED).setCheck('Number');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);
  }
};

  Blockly.Blocks['ev3_motor_stop'] = {
    init : function() {
      var ports = [ [ Blockly.Msg.STOP_MOTOR_PORT + ' A', 'outA' ],
      [ Blockly.Msg.STOP_MOTOR_PORT + ' B', 'outB' ],
      [ Blockly.Msg.STOP_MOTOR_PORT + ' C', 'outC' ],
      [ Blockly.Msg.STOP_MOTOR_PORT + ' D', 'outD' ] ];
      var motorPort = new Blockly.FieldDropdown(ports);
      this.appendDummyInput().appendField(motorPort, 'MOTOR_PORT')
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);
    }
};
