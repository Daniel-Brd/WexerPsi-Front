type MethodType = 'get' | 'post' | 'put' | 'delete'

type UrlType =
  | 'user'
  | 'user/login'
  | `patient/${string}`
  | 'occurrence'
  | `occurrence/${string}`
  | `timeline/${string}/occurrence/${string}`
  | `timeline${string}`
  | `assessment/${string}`
  | `${string}/interview`
