import { ref, type Ref } from 'vue';
import { type Block } from '@/models/Interface';

export function useDraggableBlocks() {
  const nameArray: Ref<Block[]> = ref([
    { id: 1, name: 's', color: '#FFFFFF' },
    { id: 2, name: 'a', color: '#F5F5F5' },
    { id: 3, name: 'n', color: '#EFEFEF' },
    { id: 4, name: 'd', color: '#E8E8E8' },
    { id: 5, name: 'r', color: '#E0E0E0' },
    { id: 6, name: 'o', color: '#DADADA' },
  ]);

  const onListChange = () => {};

  return {
    nameArray,
    onListChange,
  };
}
