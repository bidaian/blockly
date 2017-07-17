goog.require('Blockly.Blocks');

Blockly.Blocks['ev3_motor_run_linked_timed'] = {
  init : function() {
      var ports = [ [ 'A', 'outA' ],
      [ 'B', 'outB' ],
      [ 'C', 'outC' ],
      [ 'D', 'outD' ] ];
      var motorPort = new Blockly.FieldDropdown(ports);
      var additionalMotorPort = new Blockly.FieldDropdown(ports);
      /*
      additionalMotorPort.callValidator = function (value) {
        window.alert('eso' + value);
      };
      */
      additionalMotorPort.setValue('outB');
      this.appendValueInput('MOTOR_POWER').appendField("move together")
      .appendField(motorPort, 'MOTOR_PORT')
      .appendField(additionalMotorPort,'ADDITIONAL_MOTOR_PORT')
      .appendField(Blockly.Msg.MOTOR_SPEED);
      this.appendValueInput('MOTOR_TIME').appendField(Blockly.Msg.MOTOR_TIME)
      .setAlign(Blockly.ALIGN_RIGHT);
      this.appendDummyInput().appendField(Blockly.Msg.MOTORS_INVERTED)
      .appendField(new Blockly.FieldCheckbox("FALSE"),'MOTOR_INVERTED')
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(false);
      this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);

  }


};

Blockly.Blocks['ev3_motor_run_timed'] = {
  init : function() {
      var ports = [ [ Blockly.Msg.START_MOTOR_PORT + ' A', 'outA' ],
      [ Blockly.Msg.START_MOTOR_PORT + ' B', 'outB' ],
      [ Blockly.Msg.START_MOTOR_PORT + ' C', 'outC' ],
      [ Blockly.Msg.START_MOTOR_PORT + ' D', 'outD' ] ];
      var motorPort = new Blockly.FieldDropdown(ports);
      this.appendValueInput('MOTOR_POWER').appendField(motorPort, 'MOTOR_PORT')
      .appendField(Blockly.Msg.MOTOR_SPEED).setCheck('Number')
      this.appendValueInput('MOTOR_TIME').appendField(Blockly.Msg.MOTOR_TIME)
      .setAlign(Blockly.ALIGN_RIGHT);
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
