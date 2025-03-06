using myapp.Models;
using myapp.Repositories;
using System;

namespace myapp.Repositories{
    public interface IUnitRepository
    {
        Unit GetUnit(Guid id);

        IEnumerable<Unit> GetUnits();
        void CreateUnit(Unit unit);
        void UpdateUnit(Unit unit);
        void DeleateUnit(Guid id);
    }

}
    