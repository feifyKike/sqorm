// SQL query helpers

export function sqlWhereIn(col: string, arr: string[]) {
  return `WHERE ${col} IN (${arr.map((item) => `'${item}'`).join(',')})`
}

// translates provided sort value to column name in db.
export function mapSortToDBValue(column: string) {
  switch (column) {
    case 'Filename':
      return 'fileName'
    case 'Length':
      return 'bytes'
    case 'Time':
      return 'processingTime'
    default:
      return 'fileName'
  }
}

// translates provided filter value to column name in db.
export function mapFilterToStatement(prepend: string,column: string) {
  switch (column) {
    case 'Passing':
      return prepend + 'isvalid = 1'
    case 'Failing':
      return prepend + 'isvalid = 0'
    default:
      return ''
  }
}