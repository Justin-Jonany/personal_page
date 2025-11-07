export type BrewMethod = "western" | "gongfu";

export type TeaRatio = {
  teaGrams: number;
  waterMl: number;
};

export type TeaBrewProfile = {
  durationSeconds: number;
  temperatureCelsius: number;
  ratio: TeaRatio;
};

export type TeaCategory = "black" | "green" | "white" | "yellow" | "oolong" | "pu-erh" | "blend";

export type Tea = {
  id: string;
  name: string;
  category: TeaCategory;
  tastingNotes: string;
  profiles: Record<BrewMethod, TeaBrewProfile>;
};

export const TEA_CATALOG = [
  {
    "id": "assam",
    "name": "Assam",
    "category": "black",
    "tastingNotes": "Malty + bold",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "darjeeling-2nd-flush",
    "name": "Darjeeling (2nd Flush)",
    "category": "black",
    "tastingNotes": "Muscatel + airy",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "ceylon",
    "name": "Ceylon",
    "category": "black",
    "tastingNotes": "Citrus + brisk",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "keemun",
    "name": "Keemun",
    "category": "black",
    "tastingNotes": "Cocoa + orchid",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "lapsang-souchong",
    "name": "Lapsang Souchong",
    "category": "black",
    "tastingNotes": "Pine smoke + caramel",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "yunnan-black-dian-hong",
    "name": "Yunnan Black (Dian Hong)",
    "category": "black",
    "tastingNotes": "Honey + sweet potato",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "nilgiri",
    "name": "Nilgiri",
    "category": "black",
    "tastingNotes": "Bright + crisp",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "earl-grey",
    "name": "Earl Grey",
    "category": "blend",
    "tastingNotes": "Bergamot + vanilla",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "english-breakfast",
    "name": "English Breakfast",
    "category": "blend",
    "tastingNotes": "Hearty + comforting",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "russian-caravan",
    "name": "Russian Caravan",
    "category": "blend",
    "tastingNotes": "Campfire + malt",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "sencha",
    "name": "Sencha",
    "category": "green",
    "tastingNotes": "Grassy + sweet corn",
    "profiles": {
      "western": {
        "durationSeconds": 90,
        "temperatureCelsius": 75,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 75,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "gyokuro",
    "name": "Gyokuro",
    "category": "green",
    "tastingNotes": "Umami + oceanic",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 60,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 60,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "matcha",
    "name": "Matcha",
    "category": "green",
    "tastingNotes": "Creamy + verdant",
    "profiles": {
      "western": {
        "durationSeconds": 45,
        "temperatureCelsius": 75,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 70
        }
      },
      "gongfu": {
        "durationSeconds": 45,
        "temperatureCelsius": 75,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 70
        }
      }
    }
  },
  {
    "id": "hojicha",
    "name": "Hojicha",
    "category": "green",
    "tastingNotes": "Roasted + nutty",
    "profiles": {
      "western": {
        "durationSeconds": 90,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "genmaicha",
    "name": "Genmaicha",
    "category": "green",
    "tastingNotes": "Toasty rice + fresh",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "longjing-dragon-well",
    "name": "Longjing (Dragon Well)",
    "category": "green",
    "tastingNotes": "Chestnut + orchid",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 8,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "mao-feng",
    "name": "Mao Feng",
    "category": "green",
    "tastingNotes": "Peach + silken",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "gunpowder",
    "name": "Gunpowder",
    "category": "green",
    "tastingNotes": "Smoky + minty",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "jasmine-green",
    "name": "Jasmine Green",
    "category": "blend",
    "tastingNotes": "Jasmine bloom + silk",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "bi-luo-chun",
    "name": "Bi Luo Chun",
    "category": "green",
    "tastingNotes": "Stone fruit + mist",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 75,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 8,
        "temperatureCelsius": 75,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "tieguanyin",
    "name": "Tieguanyin",
    "category": "oolong",
    "tastingNotes": "Orchid + butter",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "da-hong-pao",
    "name": "Da Hong Pao",
    "category": "oolong",
    "tastingNotes": "Mineral + cacao",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "dong-ding",
    "name": "Dong Ding",
    "category": "oolong",
    "tastingNotes": "Toffee + alpine",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "ali-shan",
    "name": "Ali Shan",
    "category": "oolong",
    "tastingNotes": "Cream + gardenia",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "jin-xuan-milk-oolong",
    "name": "Jin Xuan (Milk Oolong)",
    "category": "oolong",
    "tastingNotes": "Milk candy + lilac",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "wuyi-rock-tea",
    "name": "Wuyi Rock Tea",
    "category": "oolong",
    "tastingNotes": "Char + cinnamon",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "bai-hao-oriental-beauty",
    "name": "Bai Hao (Oriental Beauty)",
    "category": "oolong",
    "tastingNotes": "Honey + jammy",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "phoenix-dan-cong",
    "name": "Phoenix Dan Cong",
    "category": "oolong",
    "tastingNotes": "Tropical fruit + spice",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "formosa-oolong",
    "name": "Formosa Oolong",
    "category": "oolong",
    "tastingNotes": "Apricot + toasted sugar",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "bai-mudan-white-peony",
    "name": "Bai Mudan (White Peony)",
    "category": "white",
    "tastingNotes": "Melon + meadow",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "silver-needle-baihao-yinzhen",
    "name": "Silver Needle (Baihao Yinzhen)",
    "category": "white",
    "tastingNotes": "Cucumber + rice milk",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "shou-mei",
    "name": "Shou Mei",
    "category": "white",
    "tastingNotes": "Autumn hay + honey",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "gong-mei",
    "name": "Gong Mei",
    "category": "white",
    "tastingNotes": "Biscuit + floral",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "moonlight-white",
    "name": "Moonlight White",
    "category": "white",
    "tastingNotes": "Berry + velvety",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "darjeeling-white",
    "name": "Darjeeling White",
    "category": "white",
    "tastingNotes": "Muscat + airy",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "junshan-yinzhen-yellow",
    "name": "Junshan Yinzhen (Yellow)",
    "category": "yellow",
    "tastingNotes": "Silky + nectar",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 8,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "meng-ding-huang-ya",
    "name": "Meng Ding Huang Ya",
    "category": "yellow",
    "tastingNotes": "Savory + floral",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 8,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "huo-shan-huang-ya",
    "name": "Huo Shan Huang Ya",
    "category": "yellow",
    "tastingNotes": "Chestnut + mist",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 8,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "mo-gan-huang-ya",
    "name": "Mo Gan Huang Ya",
    "category": "yellow",
    "tastingNotes": "Citrus zest + silk",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 8,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "da-ye-qing-yellow",
    "name": "Da Ye Qing (Yellow)",
    "category": "yellow",
    "tastingNotes": "Sweet corn + linen",
    "profiles": {
      "western": {
        "durationSeconds": 120,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 8,
        "temperatureCelsius": 80,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "sheng-pu-erh-young",
    "name": "Sheng Pu-erh (Young)",
    "category": "pu-erh",
    "tastingNotes": "Vibrant + pine",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "sheng-pu-erh-aged",
    "name": "Sheng Pu-erh (Aged)",
    "category": "pu-erh",
    "tastingNotes": "Camphor + dried fruit",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "shou-pu-erh-ripe",
    "name": "Shou Pu-erh (Ripe)",
    "category": "pu-erh",
    "tastingNotes": "Earth + cocoa",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "aged-pu-erh-brick",
    "name": "Aged Pu-erh Brick",
    "category": "pu-erh",
    "tastingNotes": "Antique cellar + plum",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 15,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "lao-cha-tou",
    "name": "Lao Cha Tou",
    "category": "pu-erh",
    "tastingNotes": "Molasses + cedar",
    "profiles": {
      "western": {
        "durationSeconds": 240,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 18,
        "temperatureCelsius": 95,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "purple-pu-erh",
    "name": "Purple Pu-erh",
    "category": "pu-erh",
    "tastingNotes": "Berry + mineral",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "jasmine-silver-needle",
    "name": "Jasmine Silver Needle",
    "category": "white",
    "tastingNotes": "Jasmine + spun sugar",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 85,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "osmanthus-oolong",
    "name": "Osmanthus Oolong",
    "category": "oolong",
    "tastingNotes": "Apricot blossom + honey",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "rose-black",
    "name": "Rose Black",
    "category": "blend",
    "tastingNotes": "Rose petal + malt",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 12,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 6,
          "waterMl": 100
        }
      }
    }
  },
  {
    "id": "coconut-oolong",
    "name": "Coconut Oolong",
    "category": "oolong",
    "tastingNotes": "Toasted coconut + cream",
    "profiles": {
      "western": {
        "durationSeconds": 180,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 2,
          "waterMl": 250
        }
      },
      "gongfu": {
        "durationSeconds": 10,
        "temperatureCelsius": 90,
        "ratio": {
          "teaGrams": 7,
          "waterMl": 100
        }
      }
    }
  }
] as const satisfies Tea[];

export const TEA_CATALOG_BY_ID: Record<string, Tea> = Object.fromEntries(
  TEA_CATALOG.map((tea) => [tea.id, tea])
);
