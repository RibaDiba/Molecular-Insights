<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import arrow from '../../images/arrows/arrow.png';
  
    export let coFounders;
    export let insta;
  </script>
  
  <main class="everything-container">
    <Splide
      aria-label="Meet Our Co-Founders"
      options={{
        padding: '5rem',
        type: 'loop',
        width: '90%'
      }}
      hasTrack={false}
    >
      <SplideTrack>
          {#each coFounders as founder}
          <SplideSlide>
              <div class="founder-container flex p-10 px-20">
                  <div class="founder-image">
                      <img src={founder.image} alt="" />
                  </div>
                  <div class="founder-details flex justify-center flex-col poppins text-lg px-10">
                      <div class="label mt-3 text-blue-950">{founder.name}</div>
                      <div class="title text-gray-400">{founder.title}</div>
                      <div class="description text-gray-600 mt-2">{founder.description}</div>
                      <div class="social-icons mt-3">
                          <a href={founder.instaLink}><img src={insta} alt="" /></a>
                      </div>
                  </div>
              </div>
          </SplideSlide>
          {/each}
      </SplideTrack>
  
      <div class="splide__arrows arrow-container">
          <button class="splide__arrow splide__arrow--prev btn">
              <img src={arrow} alt="" class="arrow-image">
          </button>
          <button class="splide__arrow splide__arrow--next btn">
              <img src={arrow} alt="" class="arrow-image flipped">
          </button>
      </div>
    </Splide>
  </main>
  
  <style>
      .social-icons img {
          width: 30px;
          height: 30px;
      }
  
      .founder-image img {
          width: 300px;
          height: 300px;
          object-fit: cover;
      }
  
      .btn {
          border-radius: 3px;
          border: 4px solid #172554;
          padding: 20px;
          background-color: #172554;
          transition: 0.1s;
          width: 100px;
          height: 100px;
      }
  
      .btn:hover {
          background-color: transparent;
      }
  
      .arrow-container {
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          pointer-events: none;
      }
  
      .splide__arrow {
          pointer-events: all;
          width: 100px;
          height: 100px;
      }
  
      .splide__arrow--prev {
          left: 0;
      }
  
      .splide__arrow--next {
          right: 0;
      }
  
      .everything-container {
          justify-content: center;
          align-items: center;
          display: flex;
          overflow: hidden;
          width: 100%;
          padding: 0;
          box-sizing: border-box;
      }
  
      .arrow-image {
          width: 100%;
          height: 100%;
      }
  
      .arrow-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
  
      .flipped {
          transform: rotate(180deg);
      }
  
      .poppins {
          font-family: 'Poppins';
          font-size: 24px;
      }
  
      .description {
          font-size: 14px;
      }
  
      .founder-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          width: 100%;
          margin: 0;
      }
  
      .founder-details {
          flex: 1;
          margin-left: 50px;
      }
  </style>
  