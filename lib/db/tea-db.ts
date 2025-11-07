import { TEA_CATALOG, TEA_CATALOG_BY_ID, type Tea } from "@/lib/data/tea-data";

class TeaDatabase {
  private readonly teas: Tea[] = TEA_CATALOG;

  list(): Tea[] {
    return this.teas;
  }

  findById(id: string): Tea | undefined {
    return TEA_CATALOG_BY_ID[id];
  }
}

export const teaDb = new TeaDatabase();
