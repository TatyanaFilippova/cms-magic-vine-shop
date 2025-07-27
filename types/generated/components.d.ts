import type { Struct, Schema } from '@strapi/strapi';

export interface EvaKomiText extends Struct.ComponentSchema {
  collectionName: 'components_eva_komi_texts';
  info: {
    displayName: 'text';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface EvaKomiServiceCards extends Struct.ComponentSchema {
  collectionName: 'components_eva_komi_service_cards';
  info: {
    displayName: 'service-cards';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    list: Schema.Attribute.Component<'eva-komi.service-card-item', true>;
    variant: Schema.Attribute.Enumeration<['advantages', 'services']>;
  };
}

export interface EvaKomiServiceCardItem extends Struct.ComponentSchema {
  collectionName: 'components_eva_komi_service_card_items';
  info: {
    displayName: 'service-card-item';
    icon: 'chartPie';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sort: Schema.Attribute.Integer;
    size: Schema.Attribute.Enumeration<['l', 'm', 's']>;
  };
}

export interface EvaKomiBigCenterText extends Struct.ComponentSchema {
  collectionName: 'components_eva_komi_big_center_texts';
  info: {
    displayName: 'big-center-text';
    icon: 'command';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'eva-komi.text': EvaKomiText;
      'eva-komi.service-cards': EvaKomiServiceCards;
      'eva-komi.service-card-item': EvaKomiServiceCardItem;
      'eva-komi.big-center-text': EvaKomiBigCenterText;
    }
  }
}
