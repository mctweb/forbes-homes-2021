<template>
  <header class="relative w-full h-screen p-6 overflow-hidden md:p-12 bg-blue">
    <div class="flex flex-wrap justify-start w-full col md:flex-row md:justify-between">
      <section class="z-10 w-3/5 mx-auto mt-16 slide-in-right md:w-auto lg:order-2 lg:m-0 lg:pt-12 lg:pr-12 md:max-w-sm md:ml-auto md:mb-auto">
        <nuxt-picture
          src="/stripeside/StripesideLogoLight.png"
          class="nuxtpicture-logo"
          alt="Stripeside Homes"
          height="163"
          width="400"
          sizes="sm:70vw md:50vw lg:400px"
        />
      </section>
      <section class="z-10 flex flex-col items-center w-4/5 mx-auto mt-8 text-white uppercase slide-in-up lg:block lg:m-0 md:w-full lg:w-1/2 md:mt-6 lg:mt-52 xl:mt-60 md:pl-12 lg:order-1 ">
        <h1 class="max-w-lg mx-auto text-xl leading-none tracking-tight text-center sm:text-3xl lg:text-left md:max-w-xl lg:text-4xl lg:max-w-xl lg:m-0">
          Escape from the city to your country retreat.
        </h1>
        <NuxtButton to="/developments/aberdeenshire/netherley/stripeside" class="mx-auto mt-3">
          View Stripeside Homes
        </NuxtButton>
      </section>
    </div>
    <nuxt-picture
      src="/stripeside/StripesideFarmWide.png"
      width="2300"
      height="1400"
      fit="cover"
      sizes="xs:320 sm:640 md:768 lg:1280 xl:1400 xxl:1600"
      class="nuxtpicture "
      alt="Stripeside, Netherley"
    />
  </header>
</template>

<style scoped>

.nuxtpicture::v-deep img{
  @apply object-bottom object-cover w-full h-full absolute inset-0 z-0 p-6 md:p-12;
      animation: 1.5s ease-out 0s 1 fadeIn;
}

.nuxtpicture-logo::v-deep img{
  @apply object-contain w-full h-auto md:w-72;
      animation: 1.5s ease-out 0s 1 fadeIn;
}

</style>
