let 右侧距离 = 0
let 左侧距离 = 0
basic.showIcon(IconNames.Happy)
mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 100)
basic.pause(500)
basic.forever(function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 50, 42)
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Green)
    if (mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE) || mbit_传感器类.Ultrasonic(DigitalPin.P14, DigitalPin.P15) < 20) {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Red)
        basic.pause(300)
        mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 130)
        basic.pause(500)
        左侧距离 = mbit_传感器类.Ultrasonic(DigitalPin.P14, DigitalPin.P15)
        mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 70)
        basic.pause(500)
        右侧距离 = mbit_传感器类.Ultrasonic(DigitalPin.P14, DigitalPin.P15)
        mbit_小车类.Servo_Car(mbit_小车类.enServo.S3, 100)
        if (左侧距离 > 右侧距离) {
            mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_SpinLeft)
            basic.pause(80)
        } else {
            mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_SpinRight)
            basic.pause(80)
        }
    }
})
