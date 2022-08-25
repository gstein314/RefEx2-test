export { default as ComparisonButton } from '../../components/ComparisonButton.vue'
export { default as MedianBar } from '../../components/MedianBar.vue'
export { default as MedianScale } from '../../components/MedianScale.vue'
export { default as ModalView } from '../../components/ModalView/ModalView.vue'
export { default as ModalViewAlert } from '../../components/ModalView/ModalViewAlert.vue'
export { default as ModalViewCompare } from '../../components/ModalView/ModalViewCompare.vue'
export { default as ModalViewDisplay } from '../../components/ModalView/ModalViewDisplay.vue'
export { default as ModalViewFilter } from '../../components/ModalView/ModalViewFilter.vue'
export { default as ModalViewGene } from '../../components/ModalView/ModalViewGene.vue'
export { default as ModalViewLoading } from '../../components/ModalView/ModalViewLoading.vue'
export { default as IconsIconBase } from '../../components/icons/IconBase.vue'
export { default as IconsIconBombyxMori } from '../../components/icons/IconBombyxMori.vue'
export { default as IconsIconDrosophilidae } from '../../components/icons/IconDrosophilidae.vue'
export { default as IconsIconHuman } from '../../components/icons/IconHuman.vue'
export { default as IconsIconMouse } from '../../components/icons/IconMouse.vue'
export { default as IconsIconOryzasativa } from '../../components/icons/IconOryzasativa.vue'
export { default as ScreenerView } from '../../components/ScreenerView/ScreenerView.vue'
export { default as ScreenerViewGene } from '../../components/ScreenerView/ScreenerViewGene.vue'
export { default as ScreenerViewSample } from '../../components/ScreenerView/ScreenerViewSample.vue'
export { default as ResultsIndexResults } from '../../components/results/IndexResults.vue'
export { default as ResultsItemComparison } from '../../components/results/ItemComparison.vue'
export { default as ResultsProjectResults } from '../../components/results/ProjectResults.vue'
export { default as ResultsPagination } from '../../components/results/ResultsPagination.vue'
export { default as ResultsTableHeader } from '../../components/results/TableHeader.vue'
export { default as SearchFilterNavigation } from '../../components/search/FilterNavigation.vue'
export { default as SearchFilterTab } from '../../components/search/FilterTab.vue'
export { default as SearchBar } from '../../components/search/SearchBar.vue'
export { default as SearchSpeciesNavigation } from '../../components/search/SpeciesNavigation.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
