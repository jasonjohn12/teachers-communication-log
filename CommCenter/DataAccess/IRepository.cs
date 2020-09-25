using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;
using static Dapper.SqlMapper;

namespace DataAccess
{
    public interface IRepository
    {
        Task<T> ExecuteScalarAsync<T>(string sql, object param = null);
        Task<List<T>> QueryAsync<T>(string sql, object param = null);
        Task<int> ExecuteAsync(string sql, object param = null, CommandType? commandType = null);
        Task<List<T>> StoredProcedureAsync<T>(string name, object param = null);
        Task<GridReader> QueryMultipleAsync(string sql, object param = null, CommandType? commandType = null);
        Task<IEnumerable<TReturn>> QueryAsync<TFirst, TSecond, TReturn>(string sql, Func<TFirst, TSecond, TReturn> map, object param = null, string splitOn = "Id", CommandType? commandType = null);
    }
}

   

