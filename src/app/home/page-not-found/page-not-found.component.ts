import { Component } from '@angular/core';

@Component({
  template: `
    <svg
      enable-background="new 0 0 476 238"
      version="1.1"
      viewBox="0 0 476 238"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      class="svg"
    >
      <g transform="translate(68.112 53.128)">
        <path
          class="svg__character"
          d="M87.2,0L0,96l0.8,0.8h64.8v20l0.8,0.8h20.8l0.8-0.8v-20h18.4l0.8-0.8V75.2l-0.8-0.8H88V0.8L87.2,0z    M65.6,52v22.4H46.4L65.6,52z"
        />
        <path
          class="svg__character"
          d="m156.8 3.2c-25.4 0-41.6 26.1-41.6 58.4s16.2 58.4 41.6 58.4 41.6-26.1 41.6-58.4-16.2-58.4-41.6-58.4zm0 22.4c10.4 0 17.6 12.6 17.6 36s-7.2 36-17.6 36-17.6-12.6-17.6-36 7.2-36 17.6-36z"
        />
        <path
          class="svg__character"
          d="M293.6,0l-87.2,96l0.8,0.8H272v20l0.8,0.8   h20.8l0.8-0.8v-20h18.4l0.8-0.8V75.2l-0.8-0.8h-18.4V0.8L293.6,0z M272,52v22.4h-19.2L272,52z"
        />
      </g>

      <path
        class="svg__dot"
        d="m5.3 81.5c-1.4-0.5-2.9 0.2-3.4 1.6s0.2 2.9 1.6 3.4 2.9-0.2 3.4-1.6c0.4-1.4-0.3-2.9-1.6-3.4z"
      />

      <defs>
        <path
          id="path"
          d="m9.6 86.8c18.1 7.9 34.1 11.9 45.7 14.1 17.1 3.2 34.1 6.5 55.1 2.2 15.4-3.1 28.5-9.4 32.7-11.5 17.2-8.6 21.9-15.5 34.7-17.2 10.9-1.5 20.1 1.9 27.8 5.2 41 17.9 60.5 43.2 98.5 63.6 11.4 6.1 30.8 16.3 57.4 20.7 37.1 6.1 68.5-2.3 86.7-9"
        />
        <mask id="pathMask">
          <use class="svg__mask" href="#path">
            <animate
              attributeName="stroke-dashoffset"
              dur="5s"
              begin="1s"
              values="480;0"
              fill="freeze"
            />
          </use>
        </mask>

        <g id="plane" class="svg__plane">
          <path
            d="M23.9,2.7l-12.3,7.6l-7.1,2.6L0,9.8l1.6-1C2.2,8.5,3,8.4,3.7,8.6L5.1,9l4.6-2.7L3.9,3.4l1.9-1.1
    C6.3,2,6.9,1.9,7.5,2l7.7,1.1l4.5-2.7c0.7-0.4,1.4-0.5,2.1-0.3c0.7,0.2,1.3,0.6,1.7,1.3L23.9,2.7z"
          />
          <animate
            attributeName="opacity"
            dur="0.10s"
            begin="1s"
            values="0;1"
            fill="freeze"
          />
        </g>
      </defs>

      <use class="svg__line" href="#path" mask="url(#pathMask)" />
      <use href="#plane" />

      <animateMotion
        href="#plane"
        begin="1s"
        dur="5s"
        rotate="auto"
        fill="freeze"
      >
        <mpath href="#path" />
      </animateMotion>

      <g transform="translate(67.512 53.128)">
        <path
          class="svg__character"
          d="M87.2,0L0,96l0.8,0.8h64.8v20l0.8,0.8h20.8   l0.8-0.8v-20h18.4l0.8-0.8V75.2l-0.8-0.8H88V0.8L87.2,0z M65.6,52v22.4H46.4L65.6,52z"
        />
        <path
          class="svg__character"
          d="m156.8 3.2c-25.4 0-41.6 26.1-41.6 58.4s16.2 58.4 41.6 58.4 17.8-41.3 17.8-73.6 7.6-43.2-17.8-43.2zm0 22.4c10.4 0 17.6 12.6 17.6 36s-7.2 36-17.6 36-17.6-12.6-17.6-36 7.2-36 17.6-36z"
        />
      </g>
    </svg>
    <h1 id="pageTitle">Page Not Found</h1>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {}
