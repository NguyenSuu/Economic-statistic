export interface RouterInfo {
    title: string;
    path: string;
  
  }
  
export const ROUTEINFOS: RouterInfo[] = [
  {
    path: '/monthly-production',
    title: 'Sản xuất hàng tháng'
  },
  {
    path: '/products',
    title: 'Sản phẩm'
  },
  {
    path: '/product-line',
    title: 'Dòng sản phẩm'
  },
  {
    path: '/units',
    title: 'Đơn vị tính'
  },
  {
    path: '/type-data',
    title: 'Loại dữ liệu'
  },
  {
    path: '/fields',
    title: 'Ngành'
  },
  {
    path: '/district',
    title: 'Huyện'
  },
]