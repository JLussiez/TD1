function WrapperComponent({children}) {
    return (
        <div className="box">
          <h1>Mes Alertes</h1>
          {children}
        </div>
      );
}

export default WrapperComponent;