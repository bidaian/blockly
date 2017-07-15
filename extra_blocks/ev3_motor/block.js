goog.require('Blockly.Blocks');

Blockly.Blocks['ev3_motor'] = {
  init : function() {
      var ports = [ [ Blockly.Msg.MOTOR_PORT + ' A', 'outA' ],
      [ Blockly.Msg.MOTOR_PORT + ' B', 'outB' ],
      [ Blockly.Msg.MOTOR_PORT + ' C', 'outC' ],
      [ Blockly.Msg.MOTOR_PORT + ' D', 'outD' ] ];
      var motorPort = new Blockly.FieldDropdown(ports);
      this.appendValueInput('POWER').appendField(motorPort, 'MOTORPORT').appendField(Blockly.Msg.ON).appendField(Blockly.Msg.MOTOR_SPEED).setCheck('Number');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);
  }
};
