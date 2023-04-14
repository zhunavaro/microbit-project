basic.show_icon(IconNames.HAPPY)

def on_forever():
    mbit_小车类.car_ctrl_speed2(mbit_小车类.CarState.CAR_RUN, 50, 46)
    if mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE) or mbit_传感器类.ultrasonic(DigitalPin.P14, DigitalPin.P15) < 20:
        mbit_小车类.car_ctrl(mbit_小车类.CarState.CAR_STOP)
        basic.pause(300)
        mbit_小车类.car_ctrl(mbit_小车类.CarState.CAR_SPINLEFT)
        basic.pause(100)
basic.forever(on_forever)
