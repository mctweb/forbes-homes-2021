<template>
  <div class="relative w-full ">
    <div class="relative z-10 flex items-center justify-center px-12 py-32 mr-auto md:px-16 lg:px-24 bg-blue bg-opacity-80">
      <section class="flex flex-col items-center justify-center py-20">
        <nuxt-img src="/stripeside/StripesideLogoLight.png" class="object-contain w-3/4 h-auto md:w-72 lg:w-96" height="845" width="2077" sizes="sm:100vw md:50vw lg:400px" />
        <p class="pt-12 pb-12 text-gray-300">
          ‘X’ properties are still available in this exclusive development.
        </p>
        <NuxtButton to="/contact?development=Stripeside" light>
          View Properties
        </NuxtButton>
      </section>
    </div>
    <nuxt-img src="/stripeside/StripesideBackFar.png" class="absolute inset-0 z-0 object-cover w-full h-full" />
  </div>
</template>
