import Sprite   from '../base/sprite'

const screenWidth    = window.innerWidth
const screenHeight   = window.innerHeight

// 相关常量设置
const CAT_IMG_SRC = 'images/cat.jpg'
const CAT_WIDTH   = 160
const CAT_HEIGHT  = 160

export default class Cat extends Sprite {
  constructor() {
    super(CAT_IMG_SRC, CAT_WIDTH, CAT_HEIGHT)

    // 居于屏幕中间
    this.x = screenWidth / 2 - this.width / 2
    this.y = screenHeight /2 - this.height / 2

    this.touched = false

    // 初始化事件监听
    this.initEvent()
  }

  /**
 * 玩家响应手指的触摸事件
 * 改变战机的位置
 */
  initEvent() {
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()

      let x = e.touches[0].clientX
      let y = e.touches[0].clientY

      //
      if ( this.checkIsFingerOnAir(x, y) ) {
        this.touched = true

        console.log('miao')
      }

    }).bind(this))

    canvas.addEventListener('touchmove', ((e) => {
      e.preventDefault()

      let x = e.touches[0].clientX
      let y = e.touches[0].clientY

      
        

    }).bind(this))

    canvas.addEventListener('touchend', ((e) => {
      e.preventDefault()

      this.touched = false
    }).bind(this))
  }

/**
 * 当手指触摸屏幕的时候
 * 判断手指是否在飞机上
 * @param {Number} x: 手指的X轴坐标
 * @param {Number} y: 手指的Y轴坐标
 * @return {Boolean}: 用于标识手指是否在飞机上的布尔值
 */
  checkIsFingerOnAir(x, y) {
  const deviation = 30

  return !!(   x >= this.x - deviation
            && y >= this.y - deviation
            && x <= this.x + this.width + deviation
            && y <= this.y + this.height + deviation  )
  }
}