'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Constants.Loops');


/**
 *
 * Common HSV hue for all blocks in this category.
 * Should be the same as Blockly.Msg.LOOPS_HUEd
 * @readonly
 */
Blockly.Constants.Loops.HUE = 120;
/** @deprecated Use Blockly.Constants.Loops.HUE */
Blockly.Blocks.loops.HUE = Blockly.Constants.Loops.HUE;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for thread with wait (internal number).
  {
    "type": "controls_delay",
    "message0": "%{BKY_CONTROLS_THREAD_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "DELAY",
      "check": "Number",
    }],
    "message1": "%{BKY_CONTROLS_THREAD_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "colour": "%{BKY_LOOPS_HUE}",
    "tooltip": "%{BKY_CONTROLS_THREAD_TOOLTIP}",
    "helpUrl": "%{BKY_CONTROLS_THREAD_HELPURL}"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)
