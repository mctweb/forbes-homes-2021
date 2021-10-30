<template>
  <GMap
    ref="gMap"
    language="en"
    :center="location"
    :options="{height: '100%', fullscreenControl: false, mapTypeControl:false, layout:{'height': '100%'}, streetViewControl:false}"
    :zoom="13"
    :class="{large:large}"
  >
    <GMapMarker
      :key="location.id"
      :position="location"
      :options="{icon: '/marker.png' }"
    >
      <GMapInfoWindow :options="{maxWidth: 200}">
        <slot />
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>
<script>
export default {
  props: {
    location: {
      type: Object,
      default: () => {
        return {
          lat: 27.05577368908729,
          lng: -22.2209145018531053
        }
      }

    },
    large: {
      type: Boolean,
      default: false
    }
  }

}
</script>
<style>
.large .GMap__Wrapper {
  width: 100%;
  height: 800px!important;
}
.GMap__Wrapper {
  width: 100%;
  height: 500px!important;
}
</style>
