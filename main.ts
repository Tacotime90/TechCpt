input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 45)
    basic.pause(500)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 18)
    basic.pause(300)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 34)
    basic.pause(900)
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 100)
    basic.pause(220)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 36)
    basic.pause(680)
    Kitronik_Move_Motor.stop()
    basic.pause(2000)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 30)
    basic.pause(290)
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 18)
    basic.pause(200)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    basic.pause(525)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 10)
    basic.pause(100)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 10)
    basic.pause(100)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 10)
    basic.pause(100)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    basic.pause(320)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 25)
    basic.pause(300)
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 12)
    basic.pause(100)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 52)
    basic.pause(200)
    Kitronik_Move_Motor.stop()
})
