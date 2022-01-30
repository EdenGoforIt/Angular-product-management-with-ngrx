import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductCategory } from '../product-category/product-category';

import { Product } from './product';

export class ProductData implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        description: 'Leaf rake with 48-inch wooden handle',
        starRating: 3.2,
      },
      {
        id: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        description: '15 gallon capacity rolling garden cart',
        starRating: 4.2,
      },
      {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        description: 'Curved claw steel hammer',
        starRating: 4.8,
      },
      {
        id: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        description: '15-inch steel blade hand saw',
        starRating: 3.7,
      },
      {
        id: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        description: 'Standard two-button video game controller',
        starRating: 4.6,
      },
    ];

    const productCategories: ProductCategory[] = [
      {
        id: 1,
        name: 'Nut - Almond, Blanched, Sliced',
        description:
          'Restriction of Left Main Bronchus with Extraluminal Device, Percutaneous Endoscopic Approach',
      },
      {
        id: 2,
        name: 'Eggplant - Regular',
        description:
          'Bypass Innominate Artery to Right Upper Leg Artery with Autologous Arterial Tissue, Open Approach',
      },
      {
        id: 3,
        name: 'Fish - Artic Char, Cold Smoked',
        description:
          'Reposition Lumbar Vertebra, Percutaneous Endoscopic Approach',
      },
      {
        id: 4,
        name: 'Cocoa Powder - Natural',
        description:
          'Removal of Other Device from Left Pleural Cavity, Percutaneous Endoscopic Approach',
      },
      {
        id: 5,
        name: 'Salmon Steak - Cohoe 8 Oz',
        description:
          'Release Bilateral Lungs, Via Natural or Artificial Opening',
      },
      {
        id: 6,
        name: 'Table Cloth 54x54 White',
        description: 'Speech Threshold Assessment using Sound Field / Booth',
      },
      {
        id: 7,
        name: 'Chocolate - Semi Sweet, Calets',
        description: 'Reposition Right Thorax Tendon, Open Approach',
      },
      {
        id: 8,
        name: 'Appetizer - Mini Egg Roll, Shrimp',
        description:
          'Drainage of Left Large Intestine with Drainage Device, Via Natural or Artificial Opening Endoscopic',
      },
      {
        id: 9,
        name: 'Pail With Metal Handle 16l White',
        description:
          'Drainage of Stomach with Drainage Device, Percutaneous Approach',
      },
      {
        id: 10,
        name: 'Soup V8 Roasted Red Pepper',
        description:
          'Bypass Cecum to Cutaneous with Synthetic Substitute, Percutaneous Approach',
      },
      {
        id: 11,
        name: 'Madeira',
        description:
          'Insertion of Infusion Device into Right Radial Artery, Percutaneous Approach',
      },
      {
        id: 12,
        name: 'Lettuce - Escarole',
        description:
          'Insertion of Infusion Device into Upper Artery, Open Approach',
      },
      {
        id: 13,
        name: 'Couscous',
        description:
          'Occlusion of Left Posterior Tibial Artery, Percutaneous Approach',
      },
      {
        id: 14,
        name: 'Langers - Mango Nectar',
        description:
          'Transfusion of Autologous Whole Blood into Peripheral Artery, Percutaneous Approach',
      },
      {
        id: 15,
        name: 'Cheese Cloth No 60',
        description: 'Destruction of Right Colic Artery, Open Approach',
      },
      {
        id: 16,
        name: 'Beef - Eye Of Round',
        description: 'Release Right Extraocular Muscle, Open Approach',
      },
      {
        id: 17,
        name: 'Flax Seed',
        description:
          'Physical Rehabilitation and Diagnostic Audiology, Rehabilitation, Cochlear Implant Treatment',
      },
      {
        id: 18,
        name: 'Wine - Riesling Dr. Pauly',
        description: 'Reattachment of Large Intestine, Open Approach',
      },
      {
        id: 19,
        name: 'Potato - Sweet',
        description:
          'Dilation of Left Internal Carotid Artery, Bifurcation, with Drug-eluting Intraluminal Device, Percutaneous Endoscopic Approach',
      },
      {
        id: 20,
        name: 'Beer - Blue',
        description:
          'High Dose Rate (HDR) Brachytherapy of Stomach using Other Isotope',
      },
      {
        id: 21,
        name: 'Sauce - Soya, Dark',
        description:
          'Computerized Tomography (CT Scan) of Left Lower Leg using Other Contrast',
      },
      {
        id: 22,
        name: 'Beef - Ox Tail, Frozen',
        description: 'Fluoroscopy of Left Subclavian Artery',
      },
      {
        id: 23,
        name: 'Pie Filling - Cherry',
        description:
          'Reposition Right Radius with Internal Fixation Device, Percutaneous Approach',
      },
      {
        id: 24,
        name: 'Foie Gras',
        description:
          'Insertion of Infusion Device into Brain, Percutaneous Endoscopic Approach',
      },
      {
        id: 25,
        name: 'Vinegar - Champagne',
        description:
          'Replacement of Pelvic Region Subcutaneous Tissue and Fascia with Nonautologous Tissue Substitute, Open Approach',
      },
      {
        id: 26,
        name: 'Bagels Poppyseed',
        description:
          'Excision of Lumbosacral Joint, Percutaneous Endoscopic Approach, Diagnostic',
      },
      {
        id: 27,
        name: 'Calvados - Boulard',
        description:
          'Revision of Synthetic Substitute in Left Pelvic Bone, Percutaneous Approach',
      },
      {
        id: 28,
        name: 'Wine - Jafflin Bourgongone',
        description:
          'Measurement of Respiratory Resistance, Via Natural or Artificial Opening',
      },
      {
        id: 29,
        name: 'Wine - Carmenere Casillero Del',
        description: 'Drainage of Left Lower Leg Muscle, Percutaneous Approach',
      },
      {
        id: 30,
        name: 'Cookie Choc',
        description:
          'Inspection of Thoracic Vertebral Disc, Percutaneous Endoscopic Approach',
      },
      {
        id: 31,
        name: 'Vinegar - Red Wine',
        description:
          'Dilation of Left Common Carotid Artery with Intraluminal Device, Open Approach',
      },
      {
        id: 32,
        name: 'Pepper - Red, Finger Hot',
        description: 'Release Anus, Percutaneous Endoscopic Approach',
      },
      {
        id: 33,
        name: 'Scallops - 20/30',
        description: 'Reposition Sternum, Open Approach',
      },
      {
        id: 34,
        name: 'Sugar - White Packet',
        description: 'Resection of Ventricular Septum, Percutaneous Approach',
      },
      {
        id: 35,
        name: 'Cheese - Mozzarella, Buffalo',
        description: 'Drainage of Left Axillary Vein, Percutaneous Approach',
      },
      {
        id: 36,
        name: 'Fish - Artic Char, Cold Smoked',
        description:
          'Bypass Left External Iliac Artery to Right External Iliac Artery, Percutaneous Endoscopic Approach',
      },
      {
        id: 37,
        name: 'Buffalo - Striploin',
        description:
          'Fragmentation in Right Fallopian Tube, Via Natural or Artificial Opening Endoscopic',
      },
      {
        id: 38,
        name: 'Strawberries',
        description:
          'Extraction of Lumbar Sympathetic Nerve, Percutaneous Endoscopic Approach',
      },
      {
        id: 39,
        name: 'Pastrami',
        description:
          'Introduction of Nutritional Substance into Cranial Cavity and Brain, Open Approach',
      },
      {
        id: 40,
        name: 'Wanton Wrap',
        description: 'Excision of Right Seminal Vesicle, Percutaneous Approach',
      },
      {
        id: 41,
        name: 'Fib N9 - Prague Powder',
        description:
          'Bypass Abdominal Aorta to Right Common Iliac Artery, Open Approach',
      },
      {
        id: 42,
        name: 'Ecolab - Ster Bac',
        description:
          'Revision of Synthetic Substitute in Face, Percutaneous Approach',
      },
      {
        id: 43,
        name: 'Bagel - Everything',
        description:
          'Removal of Internal Fixation Device from Left Carpal, External Approach',
      },
      {
        id: 44,
        name: 'Bread Bowl Plain',
        description:
          'Excision of Median Nerve, Percutaneous Endoscopic Approach, Diagnostic',
      },
      {
        id: 45,
        name: 'Shrimp - Prawn',
        description:
          'Wound Management Treatment of Integumentary System - Whole Body',
      },
      {
        id: 46,
        name: 'Jello - Assorted',
        description: 'Dilation of Right Basilic Vein, Open Approach',
      },
      {
        id: 47,
        name: 'Worcestershire Sauce',
        description:
          'Fragmentation in Cystic Duct, Via Natural or Artificial Opening Endoscopic',
      },
      {
        id: 48,
        name: 'Oil - Canola',
        description:
          'Bypass Bilateral Ureters to Bladder, Percutaneous Endoscopic Approach',
      },
      {
        id: 49,
        name: 'Fennel',
        description:
          'Restriction of Left External Jugular Vein with Extraluminal Device, Percutaneous Approach',
      },
      {
        id: 50,
        name: 'Southern Comfort',
        description:
          'Revision of Infusion Device in Right Metacarpocarpal Joint, Percutaneous Endoscopic Approach',
      },
    ];

    return { products, productCategories };
  }
}
