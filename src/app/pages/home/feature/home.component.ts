import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParallaxTextComponent } from '../../../shared/ui/parallax-text/parallax-text.component';
import { Slide } from '../../../core/models/interfaces/slide';
import { BannerComponent } from '../../../shared/ui/banner/banner.component';
import { FragmentComponent } from '../../../shared/ui/fragment/fragment.component';
import { Fragment } from '../../../core/models/interfaces/fragment';
import { BannerLinksComponent } from '../../../shared/ui/banner-links/banner-links.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ParallaxTextComponent, BannerComponent, BannerLinksComponent, FragmentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  content: Slide = {
    header: {
      title: 'Are You Ready to Revamp Your Home?',
      subtitle: 'Discuss your vision with professional painters in Eastham, Provincetown, and Yarmouth, MA'
    },
    image: {
      url: 'img/cover.jpg',
      title: 'Cape Cod Premier Painting Cover',
      alt: 'Cape Cod Premier Painting Cover'
    }
  }
  content2: Slide = {
    header: {
      title: 'Beautify Your Home',
      subtitle: 'Turn to our team for residential and commercial painting services'
    },
    image: {
      url: 'img/shutterstock/tiny-sample-paint-cans-during-house-2091992497_by-Anna-Mente.jpg',
      title: 'Cape Cod Premier Painting Cover',
      alt: 'Cape Cod Premier Painting Cover'
    }
  }

  fragment1: Fragment = {
    header: {
      title: `Add a Splash of Color to Your Home or Office`,
      subtitle: `Get exceptional results from professional painters in Eastham, Provincetown, and Yarmouth, MA`,
    },
    image: {
      alt: ``,
      title: ``,
      url: ``
    },
    descriptions: [
      {
        paragraph: `When you're ready to update your space, turn to the professional painters at Cape Cod Premier Painting. We offer painting services for residential and commercial clients in Eastham, Provincetown, and Yarmouth, MA, and all surrounding areas. We offer`,
        links: [
          {
            name: `residential painting services`,
            url: `interior-painting`
          },
          {
            name: `exterior painting`,
            url: `exterior-painting`
          },
          {
            name: `commercial painting`,
            url: `commercial-painting`
          },
          {
            name: `driveway pressure washing`,
            url: `pressure-washing`
          }
        ],
        textAfterLinks: `& more. Whether you're painting your bedroom or updating your deck, you can trust our team with the job.`,
      }
    ]
  }
  fragment2: Fragment = {
    header: {
      title: `What Can You Expect From Our Team?`,
      subtitle: ``
    },
    image: {
      alt: `Before After`,
      title: `Before After`,
      url: `img/before-after.jpg`
    },
    descriptions: [
      {
        paragraph: `There's no surface we won't paint. In addition to wall and siding painting services, we also offer: `,
        list: [
          `Cabinet painting`,
          `Trim and baseboard painting`,
          `Fence, deck and patio painting`
        ]
      },
      {
        paragraph: `We have the skills and tools needed to tackle projects big and small.
        
        Visit our Gallery page to see examples of our work in Eastham, Provincetown, and Yarmouth, MA.`
      }
    ]
  }
  fragment3: Fragment = {
    header: {
      title: `Learn Why We're the Team to Trust for Professional Painting Services`,
      subtitle: ``
    },
    image: {
      alt: ``,
      title: ``,
      url: ``
    },
    descriptions: [
      {
        paragraph: `Our professional painters have over five years of experience painting residential and commercial spaces in Eastham, Provincetown, and Yarmouth, MA, and the entire Cape Cod area. Our years of experience and exceptional customer service make our team stand out from the competition.
        
        To produce long-lasting results, we'll power wash your surface and prep it. Since we use quality paint from reputable brands like Sherwin-Williams and Benjamin Moore, we promise a gorgeous finish.
        
        Make the winning choice when you hire our team for painting services. Contact us now to set up your service. Be sure to ask about our 10% discounts for returning clients.`
      }
    ]
  }
  fragment4: Fragment = {
    header: {
      title: `Install durable drywall for your home or place of business`,
      subtitle: ``
    },
    image: {
      alt: ``,
      title: ``,
      url: ``
    },
    descriptions: [
      {
        paragraph: `You can't paint your way to a beautiful home without sturdy drywall installed. Fortunately, you can rely on our team for all your drywall needs. We're able to both install and repair drywall for commercial or residential clients in Eastham, Provincetown, and Yarmouth, MA. We can even patch up problem areas before we paint your interior. You can trust we'll get the job done right the first time around.
        
        Need someone to fix a minor hole in your wall? We've got you covered. Reach out to us today to learn more about our drywall installation and repair services.`
      }
    ]
  }

  links: Slide[] = [
    {
      header: {
        title: `Inteior Painting`,
        subtitle: `Learn More`
      },
      image: {
        url: `img/interior-painting.jpg`,
        title: `Interior Painting`,
        alt: `Interior Painting`
      }
    },
    {
      header: {
        title: `Exterior Painting`,
        subtitle: `Learn More`
      },
      image: {
        url: `img/exterior-painting.jpg`,
        title: `Exterior Painting`,
        alt: `Exterior Painting`
      }
    },
    {
      header: {
        title: `Commercial Painting`,
        subtitle: `Learn More`
      },
      image: {
        url: `img/shutterstock/tin-cans-paint-brushes-bright-palette-1352196275_by-Sebastian-Duda.jpg`,
        title: `Commercial Painting`,
        alt: `Commercial Painting`
      }
    },
    {
      header: {
        title: `Pressure Washing`,
        subtitle: `Learn More`
      },
      image: {
        url: `img/high-pressure-cleaning.jpg`,
        title: `Pressure Washing`,
        alt: `Pressure Washing`
      }
    }
  ]
}