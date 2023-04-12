basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE) || mbit_传感器类.Ultrasonic(DigitalPin.P14, DigitalPin.P15) < 20) {
        mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_SpinLeft, 45, 41)
    } else {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
        basic.pause(200)
    }
})
