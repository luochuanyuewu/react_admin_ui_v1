export const menu = [
  {
    catalog: "main",
    listItems: [
      {
        isLink: true,
        url: "/",
        icon: "heroicons:home",
        label: "homepage",
      },
      {
        isLink: true,
        url: "/profile",
        icon: "heroicons:user",
        label: "profile",
      },
    ],
  },
  {
    catalog: "lists",
    listItems: [
      {
        isLink: true,
        url: "/users",
        icon: "heroicons:home",
        label: "users",
      },
      {
        isLink: true,
        url: "/products",
        icon: "heroicons:cube",
        label: "products",
      },
      {
        isLink: true,
        url: "/orders",
        icon: "heroicons:clipboard-document",
        label: "orders",
      },
      {
        isLink: true,
        url: "/posts",
        icon: "heroicons:document-chart-bar",
        label: "posts",
      },
    ],
  },
  {
    catalog: "general",
    listItems: [
      {
        isLink: true,
        url: "/notes",
        icon: "heroicons:pencil-square",
        label: "notes",
      },
      {
        isLink: true,
        url: "/calendar",
        icon: "heroicons:calendar-days",
        label: "calendar",
      },
    ],
  },
  {
    catalog: "analytics",
    listItems: [
      {
        isLink: true,
        url: "/charts",
        icon: "heroicons:presentation-chart-bar",
        label: "charts",
      },
      {
        isLink: true,
        url: "/logs",
        icon: "heroicons:document-text",
        label: "logs",
      },
    ],
  },
  {
    catalog: "miscellaneous",
    listItems: [
      // {
      //   isLink: true,
      //   url: '/settings',
      //   icon: IoSettingsOutline,
      //   label: 'settings',
      // },
      {
        isLink: true,
        url: "/login",
        icon: "heroicons:arrow-left-end-on-rectangle",
        label: "log out",
      },
    ],
  },
];
