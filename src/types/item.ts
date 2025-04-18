/**
 * Type definition for Item
 */
export interface Item {
    guid: string;
    name: string;
    path: string[];
    properties: Record<string, string> | null;
  }
  