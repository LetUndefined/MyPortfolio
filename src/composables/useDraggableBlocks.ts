import { ref, type Ref } from 'vue'
import { type Block } from '@/models/Interface'

const colorArray = [
  '#1E3A8A', // Deep blue
  '#1E40AF', // Blue 800
  '#1D4ED8', // Blue 700
  '#2563EB', // Blue 600
  '#3B82F6', // Blue 500
  '#60A5FA', // Blue 400
  '#93C5FD', // Blue 300
  '#BFDBFE', // Blue 200
  '#DBEAFE', // Blue 100
  '#1E40AF', // Blue 800
  '#2563EB', // Blue 600
  '#3B82F6', // Blue 500
  '#60A5FA', // Blue 400
  '#1E3A8A', // Deep blue
]

export function useDraggableBlocks() {
  const nameArray: Ref<Block[]> = ref([
    { id: 1, name: 's', color: '#1E3A8A' },
    { id: 2, name: 'a', color: '#2563EB' },
    { id: 3, name: 'n', color: '#3B82F6' },
    { id: 4, name: 'd', color: '#60A5FA' },
    { id: 5, name: 'r', color: '#93C5FD' },
    { id: 6, name: 'o', color: '#BFDBFE' },
  ])

  const getRandomColor = (id: number) => {
    const index = Math.floor(Math.random() * colorArray.length)

    const block = nameArray.value.find((e) => e.id === id)
    if (block) {
      block.color = colorArray[index]!
    }
  }

  const onListChange = (event: void) => {
    console.log('List changed:', event)
  }

  return {
    nameArray,
    getRandomColor,
    onListChange,
  }
}
