interface ApiSrc {
  id?: number;
  blog_id?: number;
  is_cover?: number;
  src?: string;
}
interface ApiItem {
  id?: number;
  draft?: number;
  menu_id?: number;
  title_az?: string;
  title_en?: string;
  slug_az?: string;
  slug_en?: string;
  button_az?: string;
  button_en?: string;
  seo_title_en?: string;
  stat_date?: string;
  intro_text_az?: string;
  intro_text_en?: string;
  text_az?: string;
  text_en?: string;
  src?: ApiSrc[];
}
export interface typeHeader {
  id?: number;
  parent_id?: number;
  shown?: number;
  menu_az?: string;
  menu_en?: string;
  slug_az?: string;
  slug_en?: string;
  title_az?: string;
  title_en?: string;
  button_az?: string;
  button_en?: string;
  link?: string;
  text_az?: string;
  text_en?: string;
  alt_menu?: {
    id?: number;
    parent_id?: number;
    shown?: number;
    menu_az?: string;
    menu_en?: string;
    slug_az?: string;
    slug_en?: string;
    title_az?: string;
    title_en?: string;
    button_az?: string;
    button_en?: string;
    link?: string;
    text_az?: string;
    text_en?: string;
  }[];
}
export interface apiFetch {
  currentIsuses?: string;
  header?: {
    id?: number;
    parent_id?: number;
    shown?: number;
    menu_az?: string;
    menu_en?: string;
    slug_az?: string;
    slug_en?: string;
    title_az?: string;
    title_en?: string;
    button_az?: string;
    button_en?: string;
    link?: string;
    text_az?: string;
    text_en?: string;
    alt_menu?: {
      id?: number;
      parent_id?: number;
      shown?: number;
      menu_az?: string;
      menu_en?: string;
      slug_az?: string;
      slug_en?: string;
      title_az?: string;
      title_en?: string;
      button_az?: string;
      button_en?: string;
      link?: string;
      text_az?: string;
      text_en?: string;
    }[];
  }[];
  banner?: {
    id?: number;
    src?: string;
    draft?: number;
    text_az?: string;
    text_en?: string;
    title_az?: string;
    title_en?: string;
    button_az?: string;
    button_en?: string;
    link?: string;
  }[];
  volunter_nac?: ApiItem[];
  statements?: ApiItem[];
  media?: ApiItem[];
  faq?: {
    id: number;
    draft?: number;
    option_title_az?: string;
    option_title_en?: string;
    option_text_az?: string;
    option_text_en?: string;
    supportus_az?: string;
    supportus_en?: string;
  }[];
  moments?: { id?: number; src?: string }[];
  currentIsusesCtg?: {
    id?: number;
    slug_az?: string;
    slug_en?: string;
    title_az?: string;
    title_en?: string;
    name_en?: string;
    name_az?: string;
    text_az?: string;
    text_en?: string;
  }[];
  volunter_opt?: {
    src_about?: string;
    tel?: string;
    volunteer_banner_link?: string;
  };
  involve?: {
    title_1_az?: string;
    title_1_en?: string;
    title_2_az?: string;
    title_2_en?: string;
    text_az?: string;
    text_en?: string;
    button_az?: string;
    button_en?: string;
    link?: string;
    src?: string;
    src_mobile?: string;
  };
  options?: {
    sosials?: {
      unvan_az?: string;
      unvan_en?: string;
      facebook?: string;
      twitter?: string;
      youtube?: string;
      instagram?: string;
      linkedin?: string;
      map?: string;
      twitter_script: string;
      email?: string;
      tel?: string;
    };
    navbar_colors?: { navbar_btn?: string; section_bg?: string };
    take_action?: {
      take_action_banner_title_az?: string;
      take_action_banner_title_en?: string;
      take_action_banner_src?: string;
    };
    statments?: {
      statements_banner_title_az?: string;
      statements_banner_title_en?: string;
      statements_banner_src?: string;
    };
    community?: {
      community_banner_title_az?: string;
      community_banner_title_en?: string;
      community_banner_src?: string;
    };
    become?: {
      become_a_member_banner_title_az?: string;
      become_a_member_banner_title_en?: string;
      become_a_member_banner_src?: string;
      become_member_text_az?: string;
      become_member_text_en?: string;
      become_member_membership_options?: string;
      become_member_additional_questions?: string;
      become_member_membership_options_az?: string;
      become_member_additional_questions_az?: string;
      become_member_membership_options_en?: string;
      become_member_additional_questions_en?: string;
    };
    volunteer?: {
      volunteer_banner_title_az?: string;
      volunteer_banner_title_en?: string;
      volunteer_banner_link?: string;
      volunteer_banner_src?: string;
    };
    media?: {
      media_title_az?: string;
      media_title_en?: string;
      media_text_az?: string;
      media_text_en?: string;
      media_src?: string;
    };
    search?: {
      search_banner_title_az?: string;
      search_banner_src?: string;
      search_banner_title_en?: string;
    };
    support?: {
      support_top_title?: string;
      support_top_title_2?: string;
      support_top_title_3?: string;
      support_card_1_text?: string;
      support_card_2_text?: string;
      support_card_3_text?: string;
      support_bottom_text?: string;
      support_credit_card?: string;
      support_e_transfer?: string;
      support_e_cheque?: string;
    };
  };
  press?: {
    title_1_az?: string;
    title_1_en?: string;
    text_az?: string;
    text_en?: string;
    button_az?: string;
    button_en?: string;
    link?: string;
    src?: string;
    src_mobile?: string;
  };
  p_mission?: {
    title_1_az?: string;
    title_1_en?: string;
    text_az?: string;
    text_en?: string;
    button_az?: string;
    button_en?: string;
    link?: string;
    src?: string;
    src_mobile?: string;
    pmission_title_1_az?: string;
    pmission_title_1_en?: string;
    pmission_button_az?: string;
    pmission_button_en?: string;
    pmission_link?: string;
    pmission_text_az?: string;
    pmission_text_en?: string;
    pmission_src?: string;
    pmission_src_mobile?: string;
  };
  who?: {
    section_1?: {
      section_one_title_1_az?: string;
      section_one_title_1_en?: string;
      section_one_text_az?: string;
      section_one_text_en?: string;
      section_one_src?: string;
    };
    section_2?: {
      section_two_title_1_az?: string;
      section_two_title_1_en?: string;
      section_two_text_az?: string;
      section_two_text_en?: string;
      section_two_src?: string;
    };
    section_3?: {
      section_three_title_1_az?: string;
      section_three_title_1_en?: string;
      section_three_text_az?: string;
      section_three_text_en?: string;
      section_three_src?: string;
    };
    section_4?: {
      section_four_title_1_az?: string;
      section_four_title_1_en?: string;
      section_four_text_az?: string;
      section_four_text_en?: string;
      section_four_src?: string;
    };
    counter?: {
      members?: number;
      events?: string;
      parliament?: string;
      programs?: string;
    };
    all?: {
      photo_1_text_az?: string;
      photo_2_text_az?: string;
      photo_3_text_az?: string;
      photo_1_text_en?: string;
      photo_2_text_en?: string;
      photo_3_text_en?: string;
      title_1_az?: string;
      title_1_en?: string;
      text_az?: string;
      text_en?: string;
      photo_1?: string;
      photo_2?: string;
      photo_3?: string;
      section_one_video_link?: string;
      link_1?: string;
      link_2?: string;
      link_3?: string;
    };
  };
}
