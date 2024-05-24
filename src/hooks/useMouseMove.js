/**
 * 
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseMove(element) {
  const x = ref(0)
  const y = ref(0)

  const t0 = ref(0);
  const t1 = ref(1);


  element.value.addEventListener('touchstart', function (event) {
    t0.value = window.performance.now();
  })
  element.value.addEventListener('touchend', function (event) {
    t1.value = window.performance.now();
    console.log(t1.value - t0.value);
  })
  // element.value.addEventListener('mouseup',function(event){
  //   console.log(event)
  // })
  // // 组合式函数可以随时更改其状态。
  // function update(event) {
  //   x.value = event.pageX
  //   y.value = event.pageY
  // }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.removeEventListener('mousemove', update))

  // 通过返回值暴露所管理的状态
  return { x, y }
}