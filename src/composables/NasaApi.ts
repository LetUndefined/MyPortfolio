import type { Nasa } from '@/models/Interface';
import { ref, type Ref } from 'vue';

export const apiData: Ref<Nasa | null> = ref(null);
export const isLoading = ref(false);
export const hasError = ref(false);

export const getApi = async () => {
  isLoading.value = true;
  hasError.value = false;

  try {
    const response = await fetch(
      'https://api.codetabs.com/v1/proxy?quest=http://api.open-notify.org/astros.json',
    );

    if (!response.ok) {
      hasError.value = true;
      return;
    }
    const data: Nasa = await response.json();
    return data;
  } catch (error) {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};
