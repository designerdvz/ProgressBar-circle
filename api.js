// export class ProgressBar {
//     constructor(progress_value, isAnimate, isHide) {
//         this.progress_value = progress_value,
//             this.isAnimate = isAnimate,
//             this.isHide = isHide
//     }
//     Normal() {
//         this.progress_value = 10
//     }
//     Animated() {
//         this.isAnimated = true
//     }
//     Hidden() {
//         this.isHide = false
//     }
// }
const progressBar = {
    progress_value: 0,
    isAnimate: false,
    isHide: false,
    getProgressValue: () => {
      return this.progress_value
    },
    setNewProgressValue: (progressValue) => {
      this.progress_value = progressValue
    },
    setNormal: () => {
        this.isAnimate = false
        this.isHide = false
    },
    setAnimated: (isAnimate) => {
        this.isAnimate = true
    },
    setHidden: () => {
        this.isHide = true
    }
}
export {progressBar}

