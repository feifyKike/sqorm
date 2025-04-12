// SQL query helpers

export function sqlWhereIn(col: string, arr: string[]) {
  return `WHERE ${col} IN (${arr.map((item) => `'${item}'`).join(',')})`
}

// more to add in the future...
// sqlWhere(col: string, valA: string, comparison: string, valB?: string)
// sqlSelect(tableName: string, columns: string[] = ["*"])
// sqlInsert(tableName: string, data: Record<string, string | number>)
// sqlUpdate(tableName: string, updates: Record<string, string | number>, whereClause: string)
// sqlDelete(tableName: string, whereClause: string)
// sqlOrderBy(columns: string[], directions?: string[])
// sqlLimitOffset(limit: number, offset: number = 0)
