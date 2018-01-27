

export const truncate = (string, length=10) =>{
   if (string.length > length)
      return string.substring(0,length)+'..';
   else
      return string;
};