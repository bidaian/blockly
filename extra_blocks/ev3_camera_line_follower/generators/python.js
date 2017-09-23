'use strict';
goog.require('Blockly.Python');

Blockly.Python['ev3_camera_line_follower'] = function(block) {

  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['definitions_video_capture'] = 'video_capture = None';
  Blockly.Python.definitions_['x_function_follow_line'] = `
def follow_line():
  global video_capture
  if video_capture is None:
    video_capture = cv2.VideoCapture(-1)
    video_capture.set(3, 160)
    video_capture.set(4, 120)
  # Capture the frames
  ret, frame = video_capture.read()

  # Crop the image
  crop_img = frame[60:120, 0:160]

  # Convert to grayscale
  gray = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)

  # Gaussian blur
  blur = cv2.GaussianBlur(gray,(5,5),0)

  # Color thresholding
  ret,thresh = cv2.threshold(blur,60,255,cv2.THRESH_BINARY_INV)

  # Find the contours of the frame
  contours,hierarchy = cv2.findContours(thresh.copy(), 1, cv2.CHAIN_APPROX_NONE)

  # Find the biggest contour (if detected)
  if len(contours) > 0:

      c = max(contours, key=cv2.contourArea)

      M = cv2.moments(c)

      if M['m00'] != 0:
        cx = int(M['m10']/M['m00'])
        cy = int(M['m01']/M['m00'])

      cv2.line(crop_img,(cx,0),(cx,720),(255,0,0),1)
      cv2.line(crop_img,(0,cy),(1280,cy),(255,0,0),1)
      cv2.drawContours(crop_img, contours, -1, (0,255,0), 1)

      if cx >= 110:
          info "<"

      if cx < 110 and cx > 60:
          info "="

      if cx <= 60:
          info ">"
  else:
      info "?"

  #Display the resulting frame
  # cv2.imshow('frame',crop_img)
  return info
`;

  var code;
  code = "follow_line()"

  return [code,Blockly.Python.ORDER_FUNCTION_CALL];
};
