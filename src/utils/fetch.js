import { ref, watchEffect, toValue } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  //   第一版
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => (data.value = json))
  //     .catch((err) => (error.value = err));

  // toValue 将值、refs 或 getters 规范化为值。
  const req_url = toValue(url); // 如果toValue放在外面，那么watchEffect就监听不到了

  // 第二版
  const fetchData = () => {
    // reset state before fetching..
    data.value = null;
    error.value = null;

    // fetch(req_url) // 如果toValue放在外面，那么watchEffect就监听不到了
    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error };
}
