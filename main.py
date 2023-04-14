右侧距离 = 0
左侧距离 = 0
basic.show_icon(IconNames.HAPPY)
mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 100)
basic.pause(500)

def on_forever():
    global 左侧距离, 右侧距离
    mbit_小车类.car_ctrl_speed2(mbit_小车类.CarState.CAR_RUN, 50, 42)
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.GREEN)
    if mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE) or mbit_传感器类.ultrasonic(DigitalPin.P14, DigitalPin.P15) < 20:
        mbit_小车类.car_ctrl(mbit_小车类.CarState.CAR_STOP)
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.RED)
        basic.pause(300)
        mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 130)
        basic.pause(500)
        左侧距离 = mbit_传感器类.ultrasonic(DigitalPin.P14, DigitalPin.P15)
        mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 70)
        basic.pause(500)
        右侧距离 = mbit_传感器类.ultrasonic(DigitalPin.P14, DigitalPin.P15)
        mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 100)
        if 左侧距离 > 右侧距离:
            mbit_小车类.car_ctrl(mbit_小车类.CarState.CAR_SPINLEFT)
            basic.pause(80)
        else:
            mbit_小车类.car_ctrl(mbit_小车类.CarState.CAR_SPINRIGHT)
            basic.pause(80)
basic.forever(on_forever)
