import { onMounted, onUnmounted, ref } from "vue";

// 我们可以将添加和清除 DOM 事件监听器的逻辑也封装进一个组合式函数中
export function useEventListener(target, event, callback) {
  // 如果你想的话，
  // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  //   onMounted(() => window.addEventListener("mousemove", update));
  //   onUnmounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
}
