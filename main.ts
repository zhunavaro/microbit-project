basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE)) {
        mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 55, 50)
    } else {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    }
})
