/*
page:请求页码
model:数据类型
query:查询条件
projection:投影
sort:排序
populates:关联的数组
*/
async function pagination(options){
	/*
	分页：
	约定：每一页显示 2 条
	第一页 跳过 0 条skip(0)
	第二页 跳过 2 条skip(2)
	第三页 跳过 4 条skip(4)
	第 page 页 跳过（page -1) *limit 条 skip (page -1)*limt
	 */
	let { page,model,query,projection,sort,populates } = options;
	page = parseInt(page);
	if(isNaN(page)){
		page = 1;
	}
	if(page<=0){
		page = 1
	}
	const count = await model.countDocuments(query);
	const limit = 2;
    const pages = Math.ceil(count / limit);
    if (page > pages) {
        page = pages
    }
    //如果总页数是0
    if(page == 0){
    	page = 1
    }
	//生成頁碼
	const list = [];
	for(let i = 1;i<=pages;i++){
		list.push(i);
	}
	//跳过条数
    const skip = (page - 1) * limit;
    let result = model.find(query,projection);
    if(populates){
    	populates.forEach(populate=>{
    		result = result.populate(populate);
    	})
    }
    const docs = await result.sort(sort).skip(skip).limit(limit)
  	return {
  		docs,page,list,pages
  	}
}
module.exports = pagination